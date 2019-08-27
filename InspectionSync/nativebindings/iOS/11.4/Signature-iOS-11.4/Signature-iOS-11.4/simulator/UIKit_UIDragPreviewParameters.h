#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIDragPreviewParameters_symbols(JSContext*);
@protocol UIDragPreviewParametersInstanceExports<JSExport, NSCopyingInstanceExports_>
@property (copy,nonatomic) UIBezierPath * visiblePath;
@property (copy,nonatomic) UIColor * backgroundColor;
JSExportAs(initWithTextLineRects,
-(id) jsinitWithTextLineRects: (NSArray *) textLineRects );
-(id) jsinit;
@end
@protocol UIDragPreviewParametersClassExports<JSExport, NSCopyingClassExports_>
@end
#pragma clang diagnostic pop