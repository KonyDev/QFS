#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UICollectionViewCell_symbols(JSContext*);
@protocol UICollectionReusableViewInstanceExports<JSExport>
@property (readonly,copy,nonatomic) NSString * reuseIdentifier;
-(void) prepareForReuse;
-(UICollectionViewLayoutAttributes *) preferredLayoutAttributesFittingAttributes: (UICollectionViewLayoutAttributes *) layoutAttributes ;
-(void) applyLayoutAttributes: (UICollectionViewLayoutAttributes *) layoutAttributes ;
-(void) willTransitionFromLayout: (UICollectionViewLayout *) oldLayout toLayout: (UICollectionViewLayout *) newLayout ;
-(void) didTransitionFromLayout: (UICollectionViewLayout *) oldLayout toLayout: (UICollectionViewLayout *) newLayout ;
@end
@protocol UICollectionReusableViewClassExports<JSExport>
@end
@protocol UICollectionViewCellInstanceExports<JSExport>
@property (getter=isHighlighted,nonatomic) BOOL highlighted;
@property (nonatomic,strong) UIView * backgroundView;
@property (nonatomic,strong) UIView * selectedBackgroundView;
@property (readonly,nonatomic) UIView * contentView;
@property (getter=isSelected,nonatomic) BOOL selected;
-(void) dragStateDidChange: (UICollectionViewCellDragState) dragState ;
@end
@protocol UICollectionViewCellClassExports<JSExport>
@end
#pragma clang diagnostic pop