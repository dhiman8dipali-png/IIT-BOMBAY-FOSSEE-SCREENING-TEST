import re

__all__ = ['parse_header', 'valid_boundary']

_boundary_re = re.compile(r'^[ -~]{0,69}$')


def parse_header(line):
    if isinstance(line, bytes):
        line = line.decode('latin-1')
    if '\r' in line:
        line = line.replace('\r', '')
    parts = line.split(';')
    key = parts[0].strip()
    params = {}
    for item in parts[1:]:
        if not item:
            continue
        if '=' in item:
            name, value = item.split('=', 1)
            name = name.strip().lower()
            value = value.strip()
            if len(value) >= 2 and value[0] == value[-1] == '"':
                value = value[1:-1]
            params[name] = value
        else:
            token = item.strip().lower()
            if token:
                params[token] = ''
    return key, params


def valid_boundary(boundary):
    if boundary is None:
        return False
    if isinstance(boundary, bytes):
        try:
            boundary = boundary.decode('ascii')
        except UnicodeDecodeError:
            return False
    if not _boundary_re.match(boundary):
        return False
    if boundary.endswith(' '):
        return False
    return True
