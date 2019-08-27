#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIDragPreview_symbols(JSContext*);
@protocol UIDragPreviewInstanceExports<JSExport, NSCopyingInstanceExports_>
@property (readonly,copy,nonatomic) UIDragPreviewParameters * parameters;
@property (readonly,nonatomic) UIView * view;
JSExportAs(initWithView,
-(id) jsinitWithView: (UIView *) view );
JSExportAs(initWithViewParameters,
-(id) jsinitWithView: (UIView *) view parameters: (UIDragPreviewParameters *) parameters );
@end
@protocol UIDragPreviewClassExports<JSExport, NSCopyingClassExports_>
@end
#pragma clang diagnostic pop