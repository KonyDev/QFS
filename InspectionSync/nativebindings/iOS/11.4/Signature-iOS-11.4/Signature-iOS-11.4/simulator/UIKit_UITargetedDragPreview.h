#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UITargetedDragPreview_symbols(JSContext*);
@protocol UIDragPreviewTargetInstanceExports<JSExport, NSCopyingInstanceExports_>
@property (readonly,nonatomic) UIView * container;
@property (readonly,nonatomic) CGPoint center;
@property (readonly,nonatomic) CGAffineTransform transform;
JSExportAs(initWithContainerCenterTransform,
-(id) jsinitWithContainer: (UIView *) container center: (CGPoint) center transform: (CGAffineTransform) transform );
JSExportAs(initWithContainerCenter,
-(id) jsinitWithContainer: (UIView *) container center: (CGPoint) center );
@end
@protocol UIDragPreviewTargetClassExports<JSExport, NSCopyingClassExports_>
@end
@protocol UITargetedDragPreviewInstanceExports<JSExport, NSCopyingInstanceExports_>
@property (readonly,nonatomic) CGSize size;
@property (readonly,nonatomic) UIDragPreviewTarget * target;
@property (readonly,copy,nonatomic) UIDragPreviewParameters * parameters;
@property (readonly,nonatomic) UIView * view;
JSExportAs(initWithView,
-(id) jsinitWithView: (UIView *) view );
-(UITargetedDragPreview *) retargetedPreviewWithTarget: (UIDragPreviewTarget *) newTarget ;
JSExportAs(initWithViewParametersTarget,
-(id) jsinitWithView: (UIView *) view parameters: (UIDragPreviewParameters *) parameters target: (UIDragPreviewTarget *) target );
JSExportAs(initWithViewParameters,
-(id) jsinitWithView: (UIView *) view parameters: (UIDragPreviewParameters *) parameters );
@end
@protocol UITargetedDragPreviewClassExports<JSExport, NSCopyingClassExports_>
@end
#pragma clang diagnostic pop